"use client";

import { Button, Modal, Label, TextInput, Select } from "flowbite-react";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function AddContributionModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* The Trigger Button */}
      <button 
        onClick={() => setOpenModal(true)}
        className="flex items-center gap-2 bg-text_heavy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
      >
        <Plus size={16} />
        Add Contribution
      </button>

      {/* The Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add New Contribution</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            
            {/* Event Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="eventName" value="Contribution Name" />
              </div>
              <TextInput id="eventName" placeholder="e.g. Christmas Party" required />
            </div>

            {/* Amount & Due Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="amount" value="Amount per Head" />
                </div>
                <TextInput id="amount" type="number" icon={() => <span>₱</span>} placeholder="200.00" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dueDate" value="Due Date" />
                </div>
                <TextInput id="dueDate" type="date" required />
              </div>
            </div>

            {/* Type */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="type" value="Type" />
              </div>
              <Select id="type" required>
                <option>Event Fund</option>
                <option>Class Materials</option>
                <option>Penalty/Fine</option>
                <option>Miscellaneous</option>
              </Select>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="dark" onClick={() => setOpenModal(false)}>
            Create Event
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}