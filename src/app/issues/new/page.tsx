"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { Button, Callout, TextField, Text, Spinner } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setIsLoading(false);
      setError("An unexpected error occured");
    }
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={onSubmit}
      >
        <TextField.Root placeholder="Titles" {...register("title")}>
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <ErrorMessage >{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage >{errors.description?.message}</ErrorMessage>

        <Button disabled={isLoading}>Submit New Issue{isLoading &&<Spinner/>}</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
