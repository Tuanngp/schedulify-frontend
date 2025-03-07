import { useFormContext } from "react-hook-form";
import { PostFormData } from "@/types/post";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const timezones = [
  { value: "Asia/Ho_Chi_Minh", label: "Hồ Chí Minh (GMT+7)" },
  { value: "Asia/Bangkok", label: "Bangkok (GMT+7)" },
  { value: "Asia/Singapore", label: "Singapore (GMT+8)" },
  { value: "Asia/Tokyo", label: "Tokyo (GMT+9)" },
];

export default function ScheduleOptions() {
  const { setValue, watch } = useFormContext<PostFormData>();
  const scheduledAt = watch("scheduledAt");
  const timezone = watch("timezone");

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const currentSchedule = scheduledAt ? new Date(scheduledAt) : new Date();
    date.setHours(currentSchedule.getHours());
    date.setMinutes(currentSchedule.getMinutes());
    setValue("scheduledAt", date);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    const date = scheduledAt ? new Date(scheduledAt) : new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    setValue("scheduledAt", date);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Lên lịch đăng bài</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Label>Chọn ngày</Label>
          <Calendar
            mode="single"
            selected={scheduledAt}
            onSelect={handleDateSelect}
            locale={vi}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-4">
          <div>
            <Label>Chọn giờ</Label>
            <Input
              type="time"
              value={
                scheduledAt
                  ? format(scheduledAt, "HH:mm")
                  : format(new Date(), "HH:mm")
              }
              onChange={handleTimeChange}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Múi giờ</Label>
            <Select
              value={timezone}
              onValueChange={(value) => setValue("timezone", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Chọn múi giờ" />
              </SelectTrigger>
              <SelectContent>
                {timezones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {scheduledAt && (
            <div className="mt-6 p-4 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">
                Bài viết sẽ được đăng vào:{" "}
                <span className="font-medium text-foreground">
                  {format(scheduledAt, "HH:mm 'ngày' dd/MM/yyyy", {
                    locale: vi,
                  })}
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Múi giờ: {timezones.find((tz) => tz.value === timezone)?.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 