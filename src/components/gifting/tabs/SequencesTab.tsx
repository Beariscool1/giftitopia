
import React from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MotionCard } from "@/components/ui/motion-card";
import { Gift, FileText, Clock } from "lucide-react";
import { SequenceCard } from "../cards/SequenceCard";
import { GiftSequence } from "../types";

interface SequencesTabProps {
  giftSequences: GiftSequence[];
}

export const SequencesTab: React.FC<SequencesTabProps> = ({ giftSequences }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {giftSequences.map((sequence) => (
          <SequenceCard key={sequence.id} sequence={sequence} />
        ))}
      </div>

      <GlassPanel className="mt-8 p-6">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-accent/30">
            <FileText className="h-8 w-8 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Create a Custom Sequence</h3>
            <p className="text-muted-foreground mb-4">
              Design your own series of closing and follow-up gifts tailored to your clients' preferences.
            </p>
            <Button>
              <Gift className="mr-2 h-4 w-4" /> Build Custom Sequence
            </Button>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
};
