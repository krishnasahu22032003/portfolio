import { NextResponse } from "next/server"

const GITHUB_USERNAME = "krishnasahu22032003"

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

const query = `
  query ContributionCalendar(
    $username: String!
    $from: DateTime!
    $to: DateTime!
  ) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions

          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      console.error("GITHUB_TOKEN is missing")

      return NextResponse.json(
        {
          success: false,
          error: "GitHub token is not configured",
        },
        { status: 500 }
      )
    }

    const now = new Date()

    const from = new Date(now)

    from.setUTCFullYear(
      from.getUTCFullYear() - 1
    )

    const response = await fetch(
      GITHUB_GRAPHQL_URL,
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
          "User-Agent": "Krishna-Portfolio",
        },

        body: JSON.stringify({
          query,
          variables: {
            username: GITHUB_USERNAME,
            from: from.toISOString(),
            to: now.toISOString(),
          },
        }),

        next: {
          revalidate: 3600,
        },
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error(
        "GitHub API error:",
        result
      )

      return NextResponse.json(
        {
          success: false,
          error:
            result?.message ||
            "GitHub API request failed",
        },
        { status: response.status }
      )
    }

    if (result.errors?.length) {
      console.error(
        "GitHub GraphQL errors:",
        result.errors
      )

      return NextResponse.json(
        {
          success: false,
          error: result.errors[0]?.message,
        },
        { status: 500 }
      )
    }

    const calendar =
      result.data?.user
        ?.contributionsCollection
        ?.contributionCalendar

    if (!calendar) {
      return NextResponse.json(
        {
          success: false,
          error:
            "GitHub contribution calendar not found",
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      total: {
        lastYear:
          calendar.totalContributions,
      },
      contributions:
        calendar.weeks.flatMap(
          (week: any) =>
            week.contributionDays.map(
              (day: any) => ({
                date: day.date,
                count:
                  day.contributionCount,
                weekday: day.weekday,
              })
            )
        ),
    })
  } catch (error) {
    console.error(
      "GitHub contribution error:",
      error
    )

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "GitHub request failed",
      },
      { status: 500 }
    )
  }
}