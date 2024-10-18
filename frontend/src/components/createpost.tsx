import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { PlusIcon } from "lucide-react";

export function CreatePost() {
  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <Button variant="outline">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className={"max-w-[380px]"}>
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <div className={"flex flex-col gap-6"}>
          <Input
            id={"title"}
            name={"title"}
            type={"text"}
            placeholder={"Title"}
          />
          <Textarea
            id={"description"}
            name={"description"}
            placeholder={"Description"}
          />
          <Input
            id={"salary"}
            name={"salary"}
            type={"number"}
            placeholder={"Salary"}
          />
        </div>
        <DialogFooter>
          <Button type={"submit"}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
