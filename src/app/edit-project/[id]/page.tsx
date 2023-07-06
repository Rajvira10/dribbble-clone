import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { FC } from "react";
import { ProjectInterface } from "@/src/common.types";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = async ({ params: { id } }) => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>
      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default page;
