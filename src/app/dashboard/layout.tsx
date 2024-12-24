import { AppSidebar } from "@/src/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main>{children}</main>
    </SidebarProvider>
  );
}
