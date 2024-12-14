import {
  Calendar,
  Home,
  Inbox,
  Monitor,
  Search,
  Settings,
  TestTube,
} from "lucide-react";

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
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
