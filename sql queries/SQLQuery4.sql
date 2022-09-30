/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [item_id]
      ,[order_id]
      ,[product_id]
      ,[quantity]
      ,[created_at]
      ,[modified_at]
  FROM [EcommerceTest].[dbo].[order_items]

  
  select * from order_items where order_id = 10
  inner join order_details on order_items.order_id = 10
  select * from order_items
  inner join order_details on order_items.order_id = 10

select top(50) order_items.* , order_details.user_id , order_details.total, order_details.payment_id , order_details.orderStatus, product.name,product.description,product.price, product.imgs,product.discount_id,product.inventory_id,product.inStock
from order_items
inner join order_details on order_items.order_id = order_details.order_id
inner join product on product.product_id = order_items.order_id
order by order_id

select * from order_details

select top(50) order_items.* , order_details.user_id , order_details.total, order_details.payment_id , order_details.orderStatus, 
product.name,product.description,product.price, product.imgs,product.discount_id,product.inventory_id,product.inStock, 
users.username,users.address,users.email,users.telephone
from order_items
inner join order_details on order_items.order_id = order_details.order_id
inner join product on product.product_id = order_items.order_id
inner join users on users.user_id = order_details.user_id 
order by order_id