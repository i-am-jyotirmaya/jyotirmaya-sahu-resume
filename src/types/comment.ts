export type Comment = {
  id: string;
  selectedText: string;
  comment: string;
  timestamp: Date;
  section: string;
  position: {
    start: number;
    end: number;
  };
  metadata: {
    userAgent: string;
    ipAddress: string;
  };
};
