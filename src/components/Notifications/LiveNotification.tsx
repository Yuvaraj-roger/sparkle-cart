import React, { useEffect, useState } from "react";
import { useLiveActivityFeed } from "../../hooks/useLiveActivityFeed";
import { LiveActivity } from "../../types";

const LiveNotification: React.FC = () => {
  const activity = useLiveActivityFeed(8000);
  const [visible, setVisible] = useState<LiveActivity | null>(null);

  useEffect(() => {
    if (!activity) return;
    setVisible(activity);
    const timeout = setTimeout(() => setVisible(null), 5000);
    return () => clearTimeout(timeout);
  }, [activity]);

  if (!visible) return null;

  return (
    <div className="sc-toast" role="status">
      <div className="icon"><i className="fa-solid fa-bag-shopping" /></div>
      <div>
        <div className="title">{visible.name} from {visible.city}</div>
        <div className="sub">just bought "{visible.productName}"</div>
      </div>
    </div>
  );
};

export default LiveNotification;
