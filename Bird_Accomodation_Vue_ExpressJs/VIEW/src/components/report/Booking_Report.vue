<template>
    <div>
        <h2>Report</h2>
        <!-- list of button that show date as content  -->
        <!-- when clicked then show the report of that day include image and text on each SERVICES-->
        <div>
            <!-- tabbed interface -->
            <button>10/01/2022</button>
            <button>11/01/2022</button>
            <button>12/01/2022</button>
            <button>13/01/2022</button>
            <button>14/01/2022</button>
            <button>15/01/2022</button>
            <button>16/01/2022</button>
        </div>

        <div>
            <!-- tabbed tab -->
            <div>
                <h3>Report Date: 10/01/2022</h3>
                <!-- list of service name and images updated here -->
                <div>
                    <h4>Bird Food and Supplies</h4>
                    <p>Show the image that food and supplies was made</p>
                </div>
                <div>
                    <h4>Bird Food and Supplies</h4>
                    <p>Show the image that food and supplies was made</p>
                </div>
                <div>
                    <h4>Bird Food and Supplies</h4>
                    <p>Show the image that food and supplies was made</p>
                </div>
                <div>
                    <h4>Bird Food and Supplies</h4>
                    <p>Show the image that food and supplies was made</p>
                </div>
            </div>


            <!-- use can comment the service here -->
            <div>
                <h3>Leave a comment</h3>
                <textarea placeholder="comment about service"></textarea>
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Booking_Report',
}
</script>