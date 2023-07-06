import ProfilePage from "@/components/ProfilePage";
import { getUserProjects } from "@/lib/actions";
import { UserProfile } from "@/src/common.types";
import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };

  if (!result?.user) {
    return <p className="no-result-text">Failed to fetch user info</p>;
  }

  return <ProfilePage user={result?.user} />;
};

export default page;
