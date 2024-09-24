import { formatDistanceToNow } from "date-fns";

function TimeAgo({ date }: { date: Date }) {
  return "5 seocnds ago";
  return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}

export default TimeAgo;
