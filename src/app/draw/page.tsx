'use client'

import dynamic from "next/dynamic";

const Draw = dynamic(() => import("@/components/draw/draw").then(mod => mod.Draw), { ssr: false });

export default function Page() {
  return (
    <Draw />
  )
}