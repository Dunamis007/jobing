"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useAcademicLevel, type AcademicLevel } from "./academic-level-context"
import { motion } from "framer-motion"

export function AcademicLevelSelector() {
  const { academicLevel, setAcademicLevel } = useAcademicLevel()

  const levels: AcademicLevel[] = ["JAMB Candidate", "IJMB Student", "JUPEB Student", "University Student"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          <span>{academicLevel}</span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {levels.map((level) => (
          <DropdownMenuItem key={level} onClick={() => setAcademicLevel(level)} className="cursor-pointer">
            {level === academicLevel ? (
              <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="font-medium">
                {level}
              </motion.span>
            ) : (
              level
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
