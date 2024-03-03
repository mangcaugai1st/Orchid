using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE.Data;

namespace BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenusController : ControllerBase
    {
        private readonly OrchidStoreContext _context;

        public GenusController(OrchidStoreContext context)
        {
            _context = context;
        }

        // GET: api/Genus | lấy toàn bộ tên chi 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genus>>> GetGenera()
        {
          if (_context.Genera == null)
          {
              return NotFound();
          }
            return await _context.Genera.ToListAsync();
        }

        // GET: api/Genus/5 | lấy tên chi theo id
        [HttpGet("{id}")]
        public async Task<ActionResult<Genus>> GetGenus(string id)
        {
          if (_context.Genera == null)
          {
              return NotFound();
          }
            var genus = await _context.Genera.FindAsync(id);

            if (genus == null)
            {
                return NotFound();
            }

            return genus;
        }

        // PUT: api/Genus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGenus(string id, Genus genus)
        {
            if (id != genus.genus_name)
            {
                return BadRequest();
            }

            _context.Entry(genus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GenusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Genus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Genus>> PostGenus(Genus genus)
        {
          if (_context.Genera == null)
          {
              return Problem("Entity set 'OrchidStoreContext.Genera'  is null.");
          }
            _context.Genera.Add(genus);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GenusExists(genus.genus_name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGenus", new { id = genus.genus_name }, genus);
        }

        // DELETE: api/Genus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGenus(string id)
        {
            if (_context.Genera == null)
            {
                return NotFound();
            }
            var genus = await _context.Genera.FindAsync(id);
            if (genus == null)
            {
                return NotFound();
            }

            _context.Genera.Remove(genus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GenusExists(string id)
        {
            return (_context.Genera?.Any(e => e.genus_name == id)).GetValueOrDefault();
        }
    }
}
