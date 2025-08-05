import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

interface BatchFilterProps {
  batches: string[];
  activeBatch: string | null;
  onBatchChange: (batch: string | null) => void;
}

const BatchFilter = ({ batches, activeBatch, onBatchChange }: BatchFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Filter by Batch</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeBatch === null ? "default" : "outline"}
          size="sm"
          onClick={() => onBatchChange(null)}
          className={activeBatch === null ? "bg-gradient-primary" : ""}
        >
          All Batches
        </Button>
        
        {batches.map((batch) => (
          <Button
            key={batch}
            variant={activeBatch === batch ? "default" : "outline"}
            size="sm"
            onClick={() => onBatchChange(batch)}
            className={activeBatch === batch ? "bg-gradient-primary" : ""}
          >
            Batch {batch}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BatchFilter;