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
    public class OrchidsController : ControllerBase
    {
        private readonly OrchidStoreContext _context;

        public OrchidsController(OrchidStoreContext context)
        {
            _context = context;
        }

        // GET: api/Orchids
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orchid>>> GetOrchids()
        {
          if (_context.Orchids == null)
          {
              return NotFound();
          }
            return await _context.Orchids.ToListAsync();
        }

        // GET: api/Orchids/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Orchid>> GetOrchid(int id)
        {
          if (_context.Orchids == null)
          {
              return NotFound();
          }
            var orchid = await _context.Orchids.FindAsync(id);

            if (orchid == null)
            {
                return NotFound();
            }

            return orchid;
        }
        [HttpGet("[action]/{genus}")]
        public async Task<ActionResult<List<Orchid>>> GetOrchidByGenus(string genus)
        {
            var result = await _context.Orchids.Where(o => o.genus == genus).ToListAsync();
            if (result.Count == 0) return NotFound();
            return Ok(result);
        }
        // PUT: api/Orchids/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrchid(int id, Orchid orchid)
        {
            if (id != orchid.id)
            {
                return BadRequest();
            }

            _context.Entry(orchid).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrchidExists(id))
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

        // POST: api/Orchids
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Orchid>> PostOrchid(Orchid orchid)
        {
          if (_context.Orchids == null)
          {
              return Problem("Entity set 'OrchidStoreContext.Orchids'  is null.");
          }
            _context.Orchids.Add(orchid);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrchid", new { id = orchid.id }, orchid);
        }

        // DELETE: api/Orchids/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrchid(int id)
        {
            if (_context.Orchids == null)
            {
                return NotFound();
            }
            var orchid = await _context.Orchids.FindAsync(id);
            if (orchid == null)
            {
                return NotFound();
            }

            _context.Orchids.Remove(orchid);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrchidExists(int id)
        {
            return (_context.Orchids?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
