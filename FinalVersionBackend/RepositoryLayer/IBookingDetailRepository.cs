using BackendOfMajorProject.DTO;
using BackendOfMajorProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendOfMajorProject.RepositoryLayer
{
    public interface IBookingDetailRepository
    {
        public IEnumerable<BookingDetail> Get();
        public BookingDetail Get(int id);
        public Boolean Post(BookingDetail BookingDet);
        public Boolean Delete(int id);
        // IEnumerable<BookedSeatDTO> GetBookedSeat();
        public TicketDataDTO GetTicketData(int userid);
        IEnumerable<BookingDetail> GetBookingHistory(int userid);

    }
}
