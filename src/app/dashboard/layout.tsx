import { AppSidebar } from "@/src/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { CreateUser } from "@/src/lib/Action/User.action";
import { User } from "@/types/global";
import { currentUser } from "@clerk/nextjs/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  const userData: User = {
    id: user?.id || "",
    email: user?.externalAccounts[0].emailAddress || "",
    fullname: user?.fullName || "",
  };
  const createUser = await CreateUser(userData);
  if ("error" in createUser) {
    console.log(createUser.message);
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main>{children}</main>
    </SidebarProvider>
  );
}
