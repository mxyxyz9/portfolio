import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, you would serve a real PDF file
  // For this example, we'll just return a response that would trigger a download

  return new NextResponse("This would be a PDF file in a real application", {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="jane-smith-resume.pdf"',
    },
  })
}
