import { format, isSameDay } from 'date-fns'
import { id } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'

export function getSchedule (lastInvitation, type) {
  console.log(typeof lastInvitation.schedule)
  let scheduleStart = new Date(lastInvitation.event.start_at)
  let scheduleEnd = new Date(lastInvitation.event.end_at)

  if (lastInvitation.rdt_event_schedule_id !== null) {
    scheduleStart = new Date(lastInvitation.schedule.start_at)
    scheduleEnd = new Date(lastInvitation.schedule.end_at)
  }

  if (isSameDay(scheduleStart, scheduleEnd)) {
    if (type === 'result') {
      return format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
    } else {
      const scheduleStartString = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'eeee, dd MMMM yyyy HH:mm', { locale: id })
      const scheduleEndAtString = format(utcToZonedTime(scheduleEnd, process.env.localTimezone), 'HH:mm', { locale: id })

      return `${scheduleStartString}-${scheduleEndAtString} WIB`
    }
  }

  const scheduleStartString = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
  const scheduleEndAtString = format(utcToZonedTime(scheduleEnd, process.env.localTimezone), 'eeee, dd MMMM yyyy', { locale: id })
  const timeDataStart = format(utcToZonedTime(scheduleStart, process.env.localTimezone), 'HH:mm', { locale: id })

  return `${scheduleStartString} <br />
  s/d <br />
  ${scheduleEndAtString} <br />
  ${timeDataStart}`
}
