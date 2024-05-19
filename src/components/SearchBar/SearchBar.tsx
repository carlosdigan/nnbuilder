import { TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { scrollBarPadding } from "../Layers/Layers"

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ setSearch }: Props) {
  return (
    <TextInput
      style={{ width: `calc(345px - ${scrollBarPadding}px)` }}
      placeholder="Search layer number…"
      onChange={(e) => setSearch(e.target.value)}
      leftSection={<IconSearch size={16}/>}
    />
  )
}
