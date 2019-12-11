function fahrenheitToCelsius(temp) {
  return Math.trunc((parseInt(temp, 10) - 32) / 1.8);
}

export default fahrenheitToCelsius;
