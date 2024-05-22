import { ActionIcon, Button, Flex, Text, Tooltip } from "@mantine/core"
import { IconInfoCircle, IconZoomIn, IconZoomOut } from "@tabler/icons-react"
import { ElementRef, MouseEventHandler, WheelEventHandler, useEffect, useRef, useState } from "react"
import { useGraph2D } from "../../hooks/useGraph2D"
import { Colors } from "../../utils/colors"

let prevClient = { x: 0, y: 0 }

export function Graph2D() {
  const canvasRef = useRef<ElementRef<"canvas">>(null)
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 })

  const { panCamera, centerCamera, resetZoom, zoomIn, zoomOut, refreshCanvas } = useGraph2D({
    canvasRef,
    canvasDimensions,
  })
  const zoomEventListener: WheelEventHandler<HTMLCanvasElement> = (e) => {
    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    panCamera(e, prevClient)
    prevClient = { x: e.clientX, y: e.clientY }
  }

  const handleMouseDown: MouseEventHandler<ElementRef<"canvas">> = (e) => {
    prevClient = { x: e.clientX, y: e.clientY }
    window.addEventListener("mousemove", handleMouseMove)
    const mouseUpListener = () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", mouseUpListener)
    }
    window.addEventListener("mouseup", mouseUpListener)
  }

  const updateCanvasDimensions = () => {
    const canvasRect = canvasRef.current?.getBoundingClientRect()
    if (!canvasRect) throw new Error("Cannot get canvas rectangle")
    const { width, height } = canvasRect
    setCanvasDimensions({ width, height })
  }

  useEffect(() => {
    updateCanvasDimensions()
    window.addEventListener("resize", updateCanvasDimensions)

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions)
    }
  }, [])

  // https://issues.chromium.org/issues/328755781
  // https://stackoverflow.com/questions/71201403/html-canvas-disappears-in-chrome-after-browser-window-tab-becomes-inactive
  useEffect(() => {
    document.addEventListener("visibilitychange", refreshCanvas)

    return () => {
      document.removeEventListener("visibilitychange", refreshCanvas)
    }
  }, [refreshCanvas])

  return (
    <>
      <canvas
        onWheel={zoomEventListener}
        onMouseDown={handleMouseDown}
        style={{ background: Colors.background, cursor: "grab", width: "100%", height: "100%" }}
        width={canvasDimensions.width}
        height={canvasDimensions.height}
        ref={canvasRef}
      />
      <Flex direction="column" rowGap={8} pos="absolute" top={20} right={20}>
        <Button onClick={centerCamera} variant="outline">
          Center Camera
        </Button>
        <Button onClick={resetZoom} variant="outline">
          Reset Zoom
        </Button>
        <Flex justify="space-between">
          <Flex gap="xs" w="100%" justify="center">
            <ActionIcon onClick={zoomIn} variant="subtle">
              <IconZoomIn />
            </ActionIcon>
            <ActionIcon onClick={zoomOut} variant="subtle">
              <IconZoomOut />
            </ActionIcon>
            <Tooltip
              withArrow
              label={
                <Flex direction="column">
                  <Text>Use mouse wheel to zoom in/out</Text>
                  <Text>Hold down left mouse button to pan around</Text>
                </Flex>
              }
            >
              <ActionIcon style={{ gridColumn: "span 2" }} variant="subtle" radius="full">
                <IconInfoCircle />
              </ActionIcon>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
