using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Data
{
    [Table("User")]
    public class User
    {
        [Key] 
        public int id { get; set; }
        [MaxLength(100)]
        public string username { get; set; }
        [MaxLength(100)]
        public string password { get; set; }
        public int status { get; set; }
    }
}
