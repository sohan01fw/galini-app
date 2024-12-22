import { Home, Inbox, Monitor, Search, TestTube } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Create Guardrails",
    url: "/dashboard/guardrails/create",
    icon: Inbox,
  },
  {
    title: "Test Guardrails",
    url: "/dashboard/guardrails/test",
    icon: TestTube,
  },
  {
    title: "Evaluate Guardrails",
    url: "/dashboard/guardrails/evaluate",
    icon: Search,
  },
  {
    title: "Moniter",
    url: "/dashboard/guardrails/moniter",
    icon: Monitor,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link href="/" className="m-2">
            <SidebarGroupLabel className="font-bold text-lg">
              Galini
            </SidebarGroupLabel>
          </Link>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
