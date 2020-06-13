using System;

namespace DynamicFib
{
    class Program
    {
        static void Main(string[] args)
        {
            Fib f = new Fib();

            long test1 = 10;
            long expectedTestResult1 = 55;
            long testResult1 = f.CalcFib(test1);

            if (testResult1 == expectedTestResult1)
            {
                Console.WriteLine("woot");
            }
        }
    }
}