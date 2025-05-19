lst_2 = []
student = int(input("Enter the number of students :"))
count = 0

while student>count:
    marks = int(input("Enter the marks of students:"))
    lst_2.append(marks)
    count += 1
    

high = lst_2[0]

for score in lst_2:
    if score >high:
        high = score

print(high)