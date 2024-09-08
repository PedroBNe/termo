"use client";

import { Navbar } from "@/components/Navbar"
import Teclado from "@/components/Teclado"
import { useState } from "react";

export default function PalavrasDashboard({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <section className="w-screen h-screen flex justify-between flex-col items-center">
      <Navbar />
      <main className="main">{children}</main>
    </section>
  )
}