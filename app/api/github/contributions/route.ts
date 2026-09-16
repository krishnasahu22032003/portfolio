import { NextResponse } from "next/server"

const GITHUB_USERNAME = "krishnasahu22032003"

export async function GET() {
  try {
    const url =
      `https://github-contributions-api.jogruber.de/v4/` +
      `${GITHUB_USERNAME}?y=last`

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    })

    if (!response.ok) {
      console.error(
        "Jogruber API failed:",
        response.status,
        response.statusText
      )

      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch GitHub contributions",
        },
        { status: 502 }
      )
    }

    const data = await response.json()

    return NextResponse.json(
      {
        success: true,
        total: data.total,
        contributions: data.contributions,
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    )
  } catch (error) {
    console.error(
      "GitHub contributions proxy error:",
      error
    )

    return NextResponse.json(
      {
        success: false,
        error: "Unable to fetch GitHub contributions",
      },
      { status: 500 }
    )
  };
};