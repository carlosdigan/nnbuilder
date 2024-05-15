import { CheckCircledIcon, CopyIcon } from "@radix-ui/react-icons"
import { Box, Tooltip } from "@radix-ui/themes"
import { useState } from "react"

type Props = {
  code: string
}

export function CopyCode({ code }: Props) {
  const [copied, setCopied] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Tooltip content={copied ? "Copied code!" : "Copy code"} open={isHovering}>
      <Box
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setCopied(false)
          setIsHovering(false)
        }}
        style={{ position: "absolute", top: 10, right: 0 }}
      >
        {copied ? (
          <CheckCircledIcon />
        ) : (
          <CopyIcon
            onClick={() => {
              navigator.clipboard.writeText(code)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          />
        )}
      </Box>
    </Tooltip>
  )
}
