"use client";
import { SessionInterface } from "@/src/common.types";
import Image from "next/image";
import { ChangeEvent, FC } from "react";
import FormField from "./FormField";

interface ProjectFormProps {
  type: string;
  session: SessionInterface;
}

const ProjectForm: FC<ProjectFormProps> = ({ type, session }) => {
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {};
  const image = null;

  const form = { title: "Title", image: "" };
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!image && "Choose a poster for your project"}
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          required={type === "create"}
          className="form_image-output"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange("title", value)}
      />
    </form>
  );
};

export default ProjectForm;
