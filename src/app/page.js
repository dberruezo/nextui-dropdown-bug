'use client';

import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/dropdown";

const items = [
  {
    key: "new",
    label: "New file",
  },
  {
    key: "copy",
    label: "Copy link",
  },
  {
    key: "edit",
    label: "Edit file",
  },
  {
    key: "delete",
    label: "Delete file",
  }
];

const Home = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          Open Menu
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example">
        <DropdownSection showDivider={true}>
          {items.map(item => (
            <DropdownItem key={item.key} style={{color: 'black'}}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Home;
