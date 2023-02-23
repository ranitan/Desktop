
        function perfectnumber() 
        {
            var n = 20;
            var sum = 0;
            for(var i = 0; i < n; i++) {
                if(n%i== 0){
                    sum=sum + i;
            }
        }
            if (sum==n)
            document.write("is a perfect number");
            else
            document.write(" is not a perfect number");
        }
        function factorial()
         {
            var m = 3;
            var fact = 1;
            var i = 1;
            do{
                fact = fact * i;
                i++;
            } while (i<=m);
            document.write(fact);
        }
        function fibonacci() 
        {
            var num = 5;
            var n1 = 0;
            var n2 = 1;
            var n3;
            var i = 1;
            document.write(n1)
            document.write(n2)
            while (i<num )
            {
                n3 = n1 + n2;
                document.write(n3)
                n1 = n2;
                n2 = n3;
                i++;

            }
            document.write(num);
        }
