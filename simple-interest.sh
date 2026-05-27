#!/bin/bash
# Script to calculate simple interest
# Simple Interest = (Principal * Rate * Time) / 100

echo "Enter Principal Amount:"
read principal

echo "Enter Rate of Interest (%):"
read rate

echo "Enter Time Period (years):"
read time

simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "Simple Interest = $simple_interest"
