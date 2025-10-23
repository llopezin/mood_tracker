import { MoodListEntry, moodEmojis } from "@/types/mood";
import formatDateToENGBLong from "@/utils/date/formatDateToENGBLong";

const MoodListItem = ({ date, mood }: MoodListEntry) => {
  const emoji = moodEmojis.get(mood);
  const readableDate = formatDateToENGBLong(date);

  return (
    <p>
      {emoji} - {readableDate}
    </p>
  );
};

export default MoodListItem;
