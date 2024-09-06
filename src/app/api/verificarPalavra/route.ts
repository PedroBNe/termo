import { NextRequest, NextResponse } from "next/server";
import words from "@/public/words.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const palavra = searchParams.get("palavra");

  if (!palavra) {
    return NextResponse.json(
      { error: "A palavra é obrigatória." },
      { status: 400 }
    );
  }

  // Convertendo a palavra para minúsculas para comparação
  const isValid = words.includes(palavra.toLowerCase());

  return NextResponse.json({ isValid });
}
