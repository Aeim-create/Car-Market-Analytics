import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCars } from '../redux/carSlice';
import CarTable from '../components/CarTable';
import PieChart from '../components/PieChart';
import StackedBarChart from '../components/StackedBarChart';
import CarCard from '../components/CarCard';
import carsData from '../taladrod-cars.json';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCars(carsData.Cars));
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Dashboard</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <PieChart />
                </div>
                <div className="col-md-6 mb-4">
                    <StackedBarChart />
                </div>
            </div>
            <CarTable />
            <div className="car-cards mt-4 d-flex flex-wrap justify-content-around">
                {carsData.Cars.map(car => <CarCard key={car.Cid} car={car} />)}
            </div>
        </div>
    );
};

export default Dashboard;
