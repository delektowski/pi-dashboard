import { useQuery } from "@apollo/client";
import { GET_MEASUREMENTS } from "../GQLQueries/get-measurements";
import { Measurement } from "../models/measurement.model";
import TemperatureMeasure from "./temperatureMeasure";

const AllMeasurements = ():JSX.Element => {
  const { loading, error, data } = useQuery<{ allMeasurements: Measurement[] }>(
    GET_MEASUREMENTS
  );

  if (loading) return (<p>"Loading..."</p>);
  if (error) return (<p>{`Error! ${error.message}`}</p>);

  return <>{data?.allMeasurements && <TemperatureMeasure allMeasurements={data.allMeasurements} />}</>;
};

export default AllMeasurements;
