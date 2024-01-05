"use client";

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";

export default function ButtonToast() {
    const { toast } = useToast()
    return (
        <Button variant="outline" onClick={() => {
            toast({
              title: "Test Toast",
              description: "Friday, February 10, 2023 at 5:57 PM"
            })
          }}>Click on me</Button>
    )
}