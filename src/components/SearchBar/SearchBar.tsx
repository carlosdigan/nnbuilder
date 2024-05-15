import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import { scrollBarPadding } from "../Layers/Layers"

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ setSearch }: Props) {
  return (
    <TextField.Root
      style={{ width: `calc(100% - ${scrollBarPadding}px)` }}
      placeholder="Search layer number…"
      onChange={(e) => setSearch(e.target.value)}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}
