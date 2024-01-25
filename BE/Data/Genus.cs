using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Data
{
    [Table("Genus")]
    public class Genus
    {
        [Key]
        public string genus { get; set; }
        public string image { get; set; }
        public ICollection<Orchid> Orchids { get; set; }
    }
}
