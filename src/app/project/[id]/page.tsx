import { getCurrentUser } from "@/lib/session";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getCurrentUser();

  return <div>page</div>;
};

export default page;
