/* total revenue by month */
select MONTH(checkout_date) AS month, YEAR(checkout_date) AS year, sum(total_service_amount) as total_revenue
from Bill
where checkout_date >= '2023-01-01'
GROUP BY YEAR(checkout_date), MONTH(checkout_date)
ORDER BY YEAR(checkout_date), MONTH(checkout_date)
go

/* total revenue by date */
select checkout_date, sum(total_service_amount) as total_revenue
from Bill
where checkout_date between '2023-01-01' and GETDATE()
group by checkout_date
go

/* total revenue by year */
SELECT YEAR(checkout_date) AS year, SUM(total_service_amount) AS revenue
FROM Bill
WHERE checkout_date >= '2023-01-01'
GROUP BY YEAR(checkout_date)
ORDER BY YEAR(checkout_date)
go

    
/* the most used service */
SELECT bd.service_id, SUM(CASE WHEN s.isPack = 1 THEN 1 ELSE bd.quantity END) AS used_quantity
FROM BookingDetail bd
INNER JOIN service s ON bd.service_id = s.service_id
GROUP BY bd.service_id
HAVING SUM(CASE WHEN s.isPack = 1 THEN 1 ELSE bd.quantity END) > 0
go


/* the completion rate of quantity and remain */
SELECT 
    service_id, 
    COUNT(*) AS total_bookings, 
    SUM(CASE WHEN remain = 0 THEN 1 ELSE 0 END) AS completed_bookings, 
    (SUM(CASE WHEN remain = 0 THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) AS completion_rate
FROM BookingDetail
GROUP BY service_id
go

/* the bird type frequently booked */
SELECT b.type_id, COUNT(*) AS booking_count
FROM Booking AS bo
INNER JOIN Bird AS b ON bo.bird_id = b.bird_id
GROUP BY b.type_id
ORDER BY booking_count DESC
go

/* the report completion rate */
SELECT 
    dr.date,
    COUNT(*) AS total_bookings,
    SUM(CASE WHEN b.date_from <= dr.date AND b.date_to >= dr.date THEN 1 ELSE 0 END) AS completed_bookings,
    (SUM(CASE WHEN b.date_from <= dr.date AND b.date_to >= dr.date THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) AS completion_rate
FROM DailyReport AS dr
LEFT JOIN Booking AS b ON dr.date >= b.date_from AND dr.date <= b.date_to
GROUP BY dr.date
go










