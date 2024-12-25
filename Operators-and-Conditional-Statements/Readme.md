# Types of Operators

.1. Arithmetic Operators
Used for mathematical calculations.

```
Operator	    Description	                Example
+	            Addition	                5 + 2 → 7
-	            Subtraction     	        5 - 2 → 3
*	            Multiplication	            5 * 2 → 10
/	            Division	                5 / 2 → 2.5
%	            Modulus (Remainder)	        5 % 2 → 1
**	            Exponentiation	            5 ** 2 → 25
```

# 1.2. Comparison Operators

Used to compare two values. Returns `true `or `false`.

```
Operator	                    Description	                    Example
==	                            Equal to	                    5 == '5' → true
===	                            Strictly equal (type + value)	5 === '5' → false
!=	                            Not equal	                    5 != '5' → false
!==	                            Strictly not equal	            5 !== '5' → true
>	                            Greater than	                5 > 3 → true
<	                            Less than	                    5 < 3 → false
>=	                            Greater than or equal to	    5 >= 5 → true
<=	                            Less than or equal to	        5 <= 3 → false
```

# 1.3. Logical Operators

Used to combine or invert conditions.

```
Operator	            Description	        Example
&&	                Logical AND         	true && false → false
||                  Logical Or              true || false -> True
!	                Logical NOT     	!true → false
```

# 1.4. Assignment Operators

Used to assign values to variables.

```
Operator	            Description     	    Example
=	                    Assign value	        x = 5
+=	                    Add and assign	        x += 5 → x = x + 5
-=	                    Subtract and assign	    x -= 5 → x = x - 5
*=	                    Multiply and assign	    x *= 5 → x = x * 5
/=	                    Divide and assign	    x /= 5 → x = x / 5

```

# 1.5. Ternary Operator

A shorthand for `if-else`.

```
condition ? value_if_true : value_if_false;
```

Example:

```

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

```
