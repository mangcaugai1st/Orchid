using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Data
{
    [Table("Orchid")]
    public class Orchid
    {
        [Key]
        public int id { get; set; }

        public string? type { get; set; }

        [MaxLength(100)]
        public string? species { get; set; }

        [MaxLength(100)]
        public string? family_name { get; set; }

        public decimal price { get; set; }

        public byte discount { get; set; }

        public int quantity { get; set; }

        public string? description { get; set; }

        [MaxLength(100)]
        public string? image0 { get; set; }

        [MaxLength(100)]
        public string? image1 { get; set; }

        [MaxLength(100)]
        public string? image2 { get; set; }

        [MaxLength(100)]
        public string? image3 { get; set; }

        [MaxLength(100)]
        public string? image4 { get; set; }

        [MaxLength(100)]
        public string? image5 { get; set; }

        [ForeignKey("genus_name")]       
        [MaxLength(100)]
        public Genus Genus { get; set; } 
        public string? genus_name { get; set; }
    }
}
