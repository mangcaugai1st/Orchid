using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Data
{
    [Table("Genus")]
    public class Genus
    {
        [Key]
        [MaxLength(100)]
        public string? genus_name { get; set; }
        public string? image { get; set; }

        public ICollection<Orchid> Orchids { get; }
    }
}
