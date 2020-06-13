using System.Collections.Generic;

namespace DynamicFib
{
    public class Fib
    {
        Dictionary<long, long> _cache = new Dictionary<long, long>();

        public Fib()
        {
            _cache.Add(0, 0);
            _cache.Add(1, 1);
        }

        public long CalcFib(long num)
        {
            for (long i = 2; i <= num; i++)
            {
                _cache.TryGetValue(i - 1, out long nMinus1);
                _cache.TryGetValue(i - 2, out long nMinus2);
                _cache.Add(i, nMinus1 + nMinus2);
            }

            _cache.TryGetValue(num, out long f);
            return f;
        }
    }
}