import { useState } from "react";

import { Modal } from "../components/Modal";
import { Select, type SelectOption } from "../components/Select";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { TextArea } from "../components/TextArea";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";

const priorityOptions: SelectOption[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function Components() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priority, setPriority] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  // Simple inputs demo
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="p-8 space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Task Board UI Kit
        </h1>

      </div>

      {/* =========================
          SELECT
      ========================== */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Modal - Priority Selector</h2>
          <Select
            id="priority"
            label="Priority"
            value={priority}
            options={priorityOptions}
            placeholder="Select Priority"
            onChange={setPriority}
          />
      </section>

      {/* =========================
          MODAL
      ========================== */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Modal - Task Form</h2>
        <Button onClick={() => setIsModalOpen(true)}>
          Create Task
        </Button>
        <Modal
          isOpen={isModalOpen}
          title="Create Task"
          size="md"
          onClose={() => setIsModalOpen(false)}
          actions={[
            {
              label: "Cancel",
              variant: "secondary",
              onClick: () => setIsModalOpen(false),
            },
            {
              label: "Save Task",
              variant: "primary",
              onClick: () => {
                console.log({ subject, description });
                setIsModalOpen(false);
              },
            },
          ]}
        >
          <div className="space-y-4">
            <TextInput
              label="Subject"
              placeholder="Enter task subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <TextArea
              label="Description"
              placeholder="Enter task description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Modal>
      </section>

      {/* =========================
          INPUT
      ========================== */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Form Inputs</h2>

        <TextInput
          label="Text Input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />

        <TextArea
          label="Text Area"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
          placeholder="Write details..."
        />
      </section>

      {/* =========================
          BADGES
      ========================== */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Status Badges</h2>

        <div className="flex gap-2 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">In Review</Badge>
          <Badge variant="danger">Blocked</Badge>
          <Badge variant="info">New</Badge>
        </div>
      </section>
      {/* =========================
          BUTTON
      ========================== */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Button varients</h2>

        <div className="flex gap-2 flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Large Action</Button>
          <Button variant="secondary" size="lg">
            Save Draft
          </Button>
          <Button variant="danger" size="sm">
            Delete
          </Button>
        </div>
      </section>

      {/* =========================
          CARD
      ========================== */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Card System</h2>

        <div className="flex gap-4 flex-wrap">
          <Card size="sm">
            <div className="h-full flex items-center justify-center">
              Small
            </div>
          </Card>

          <Card size="md">
            <div className="h-full flex items-center justify-center">
              Medium
            </div>
          </Card>

          <Card size="lg">
            <div className="h-full flex items-center justify-center">
              Large
            </div>
          </Card>

          <Card width="220px" height="180px">
            <div className="h-full flex items-center justify-center">
              Custom width and height
            </div>
          </Card>
          
          <Card size="full" height="120px">
            <div className="h-full flex items-center justify-center">
              Full Width
            </div>
          </Card>

        </div>
      </section>
    </div>
  );
}