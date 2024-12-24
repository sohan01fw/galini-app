import { CreateGuardrails } from "@/src/components/dashboard/guardrails/create";
import { CheckUser } from "@/src/lib/Action/User.action";
import { funcResponse, userD } from "@/types/global";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const cUser = await currentUser();

  const user: funcResponse = await CheckUser(
    cUser?.externalAccounts[0].emailAddress || "",
  );
  const userdata: userD = {
    email: user.data.email,
    userId: user.data.id,
  };

  return (
    <div>
      <CreateGuardrails userData={userdata} />
    </div>
  );
}
